export
# ---------------- BEFORE RELEASE ----------------
# 1 - Update Version Number
# 2 - Update RELEASE.md
# 3 - make build
# -------------- Release Process Steps --------------
# 1 - Get Credentials from devops-accounts repo
# 2 - Create Release Branch and push
# 3 - Create Release Tag and push
# 4 - GitHub Release
# 5 - PyPI Release

########################################################
# 		Variables
########################################################

ONDEWO_NLU_VERSION = 6.2.0

NLU_API_GIT_BRANCH=tags/6.2.0
ONDEWO_PROTO_COMPILER_GIT_BRANCH=tags/5.5.2
ONDEWO_PROTO_COMPILER_DIR=ondewo-proto-compiler
NLU_APIS_DIR=src/ondewo-nlu-api
NLU_PROTOS_DIR=${NLU_APIS_DIR}/ondewo
# GOOGLE_APIS_DIR=${NLU_APIS_DIR}/googleapis
# GOOGLE_PROTOS_DIR=${GOOGLE_APIS_DIR}/google
NPM_USERNAME?=ENTER_HERE_YOUR_NPM_USERNAME
NPM_PASSWORD?=ENTER_HERE_YOUR_NPM_PASSWORD
GITHUB_GH_TOKEN?=
NPM_AUTOMATION_TOKEN?=
IMAGE_UTILS_NAME=ondewo-nlu-client-utils-angular:${ONDEWO_NLU_VERSION}
PRETTIER_WRITE?=

CURRENT_RELEASE_NOTES=`cat RELEASE.md \
	| sed -n '/Release ONDEWO NLU Angular Client ${ONDEWO_NLU_VERSION}/,/\*\*/p'`

GH_REPO="https://github.com/ondewo/ondewo-nlu-client-angular"
DEVOPS_ACCOUNT_GIT="ondewo-devops-accounts"
DEVOPS_ACCOUNT_DIR="./${DEVOPS_ACCOUNT_GIT}"
.DEFAULT_GOAL := help
########################################################
#       ONDEWO Standard Make Targets
########################################################

setup_developer_environment_locally: install_packages install_precommit_hooks ## Installs all needed packages and precommit hooks

install_packages: ## Install npm packages
	npm i

run_precommit_hooks: ## Runs all precommit hooks
	.husky/pre-commit

install_precommit_hooks: ## Install precommit hooks
	npx husky install

prettier: ## Checks formatting with Prettier - Use PRETTIER_WRITE=-w to also automatically apply corrections where needed
	node_modules/.bin/prettier --config .prettierrc --check --ignore-path .prettierignore $(PRETTIER_WRITE) ./

eslint: ## Checks Code Logic and Typing
	./node_modules/.bin/eslint --config eslint.config.mjs .

TEST: ## Prints some important variables
	@echo "Release Notes: \n \n$(CURRENT_RELEASE_NOTES)"
	@echo "GH Token: \t $(GITHUB_GH_TOKEN)"
	@echo "NPM Name: \t $(NPM_USERNAME)"
	@echo "NPM Password: \t $(NPM_PASSWORD)"

help: ## Print usage info about help targets
	# (first comment after target starting with double hashes ##)
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' Makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-40s\033[0m %s\n", $$1, $$2}'

makefile_chapters: ## Shows all sections of Makefile
	@echo `cat Makefile| grep "########################################################" -A 1 | grep -v "########################################################"`

check_build: ## Checks if all built proto-code is there
	@rm -rf build_check.txt
	@rm -rf build_check_temp.txt
	@for proto in `find src/ondewo-nlu-api/ondewo -iname "*.proto*"`; \
	do \
		echo $${proto} | cut -d "/" -f 5 | cut -d "." -f 1 >> build_check_temp.txt; \
		cat build_check_temp.txt >> build_check.txt; \
	done
	@echo "`sort build_check.txt | uniq`" > build_check.txt
	@sed -i "s/\_/\-/g" build_check.txt

	@for file in `cat build_check.txt`;\
	do \
		find api -iname "*pb*" | grep -q $${file}; \
		if test $$? != 0; then  echo "No Proto-Code for $${file} in api" & exit 1;fi; \
		# find esm2022 -iname "*pb*" | grep -q $${file}; \
		# if test $$? != 0; then  echo "No Proto-Code for $${file} in esm2022" & exit 1;fi; \
		find fesm2022 -iname "*ondewo-nlu-client-angular*" | wc -l | grep -q "2"; \
		if test $$? != 0; then  echo "No Proto-Code for $${file} in fesm2022" & exit 1;fi; \
	done
	@rm -rf build_check.txt
	@rm -rf build_check_temp.txt

########################################################
#       Repo Specific Make Targets
########################################################

########################################################
#		Release

release: ## Create Github and NPM Release
	@echo "Start Release"
	make install_precommit_hooks
	make build
	make check_build
	make run_precommit_hooks
	git status
	git add api
	-git add esm2022
	git add fesm2022
	git add src
	git add README.md
	git add RELEASE.md
	git add ondewo-nlu-client-angular.d.ts
	git add ondewo-nlu-client-angular.d.ts.map
	git add ondewo-nlu-client-angular.metadata.json
	git add package-lock.json
	git add package.json
	-git add tsconfig.json
	git add Makefile
	git add ${ONDEWO_PROTO_COMPILER_DIR}
	git add ${NLU_APIS_DIR}
	git status
	-git commit -m "Preparing for Release ${ONDEWO_NLU_VERSION}"
	git push
	make publish_npm_via_docker
	make create_release_branch
	make create_release_tag
	make release_to_github_via_docker_image
	@echo "Finished Release"

gh_release: build_utils_docker_image release_to_github_via_docker_image ## Builds Utils Image and Releases to Github

npm_release: ## Releases to NPM
	@echo "Start NPM Release"
	npm publish ./npm --access public
	@echo "Finished NPM Release"

create_release_branch: ## Create Release Branch and push it to origin
	git checkout -b "release/${ONDEWO_NLU_VERSION}"
	git push -u origin "release/${ONDEWO_NLU_VERSION}"

create_release_tag: ## Create Release Tag and push it to origin
	git tag -a ${ONDEWO_NLU_VERSION} -m "release/${ONDEWO_NLU_VERSION}"
	git push origin ${ONDEWO_NLU_VERSION}

login_to_gh: ## Login to Github CLI with Access Token
	echo $(GITHUB_GH_TOKEN) | gh auth login -p ssh --with-token

build_gh_release: ## Generate Github Release with CLI
	gh release create --repo $(GH_REPO) "$(ONDEWO_NLU_VERSION)" -n "$(CURRENT_RELEASE_NOTES)" -t "Release ${ONDEWO_NLU_VERSION}"

########################################################
#		Docker

push_to_gh: login_to_gh build_gh_release ##Logs into Github CLI and Releases
	@echo 'Released to Github'

build_compiler: ## Builds Ondewo-Proto-Compiler
	cd ondewo-proto-compiler/angular && sh build.sh

release_to_github_via_docker_image: ## Release to Github via docker
	docker run --rm \
		-e GITHUB_GH_TOKEN=${GITHUB_GH_TOKEN} \
		${IMAGE_UTILS_NAME} make push_to_gh

build_utils_docker_image: ## Build utils docker image
	docker build -f Dockerfile.utils -t ${IMAGE_UTILS_NAME} .

publish_npm_via_docker: build_utils_docker_image ## Builds Code, Docker-Image and Releases to NPM
	docker run --rm \
		-e NPM_AUTOMATION_TOKEN=${NPM_AUTOMATION_TOKEN} \
		${IMAGE_UTILS_NAME} make docker_npm_release

docker_npm_release: ## Release to npm with docker image
	node --version
	npm --version
	@npm config set //registry.npmjs.org/:_authToken=${NPM_AUTOMATION_TOKEN}
	npm whoami
	make npm_release

########################################################
#		DEVOPS-ACCOUNTS

ondewo_release: spc clone_devops_accounts run_release_with_devops ## Release with credentials from devops-accounts repo
	@rm -rf ${DEVOPS_ACCOUNT_GIT}

clone_devops_accounts: ## Clones devops-accounts repo
	if [ -d $(DEVOPS_ACCOUNT_GIT) ]; then rm -Rf $(DEVOPS_ACCOUNT_GIT); fi
	git clone git@bitbucket.org:ondewo/${DEVOPS_ACCOUNT_GIT}.git

run_release_with_devops: ## Runs the make release target with credentials from devops-accounts
	$(eval info:= $(shell cat ${DEVOPS_ACCOUNT_DIR}/account_github.env | grep GITHUB_GH & cat ${DEVOPS_ACCOUNT_DIR}/account_npm.env | grep NPM_AUTOMATION_TOKEN ))
	make release $(info)

spc: ## Checks if the Release Branch, Tag and Pypi version already exist
	$(eval filtered_branches:= $(shell git branch --all | grep "release/${ONDEWO_NLU_VERSION}"))
	$(eval filtered_tags:= $(shell git tag --list | grep "${ONDEWO_NLU_VERSION}"))
	@if test "$(filtered_branches)" != ""; then echo "-- Test 1: Branch exists!!" & exit 1; else echo "-- Test 1: Branch is fine";fi
	@if test "$(filtered_tags)" != ""; then echo "-- Test 2: Tag exists!!" & exit 1; else echo "-- Test 2: Tag is fine";fi

########################################################
# Build

update_package: ## Updates Package Version in src/package.json
	@sed -i "s/\"version\": \"[0-9]*.[0-9]*.[0-9]\"/\"version\": \"${ONDEWO_NLU_VERSION}\"/g" src/package.json

build: check_out_correct_submodule_versions build_compiler update_package npm_run_build ## Build Code with Proto-Compiler
	@echo "################### PROMPT FOR CHANGING FILE OWNERSHIP FROM ROOT TO YOU ##########################"
	@for f in `find . -group root`; \
	do \
		sudo chown -R `whoami`:`whoami` $$f && echo $$f; \
	done
	-cd src/ondewo-nlu-api && git checkout -- '**/*.proto' && cd ../..
	@$(eval README_CUT_LINES:=$(shell cat -n src/README.md | sed -n "/START OF GITHUB README/,/END OF GITHUB README/p" | grep -o -E '[0-9]+' | sed -e 's/^0\+//' | awk 'NR==1; END{print}'))
	@$(eval DELETE_LINES:=$(shell echo ${README_CUT_LINES}| sed -e "s/[[:space:]]/,/"))
	@sed -i "${DELETE_LINES}d" npm/README.md
	make install_dependencies

install_dependencies:
	npm i --save-dev \
		@eslint/eslintrc \
		@eslint/js \
		@typescript-eslint/eslint-plugin \
		eslint \
		global \
		husky \
		prettier

check_out_correct_submodule_versions: ## Fetches all Submodules and checks out specified branch
	@echo "START checking out correct submodule versions ..."
	git submodule update --init --recursive
	git -C ${NLU_APIS_DIR} fetch --all
	git -C ${NLU_APIS_DIR} checkout ${NLU_API_GIT_BRANCH}
	-git -C ${NLU_APIS_DIR} pull
	git -C ${ONDEWO_PROTO_COMPILER_DIR} fetch --all
	git -C ${ONDEWO_PROTO_COMPILER_DIR} checkout ${ONDEWO_PROTO_COMPILER_GIT_BRANCH}
	-git -C ${ONDEWO_PROTO_COMPILER_DIR} pull
	@echo "DONE checking out correct submodule versions."

npm_run_build: ## Runs the build command in package.json
	@echo "START npm run build ..."
	cd src/ && npm run build && cd ..
	@echo "DONE npm run build."

npm_run_generate: ## Runs test
	@echo "START generate files ..."
	cd src/ && npm run generate && cd ..
	-cd src/ondewo-nlu-api && git checkout -- '**/*.proto' && cd ../..
	@echo "DONE generating files ."

test-in-ondewo-aim: ## Runs test
	@echo "START copying files to local AIM for testing ..."
	cd src/ && npm run test-in-ondewo-aim && cd ..
	@echo "DONE copying files to local AIM for testing."

test-in-ondewo-aim-copy-only: ## Runs test
	@echo "START copying files to local AIM for testing ..."
	cd src/ && npm run test-in-ondewo-aim-copy-only && cd ..
	@echo "DONE copying files to local AIM for testing."
