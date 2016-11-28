#!/bin/bash
# My first script

STARTCOMMIT="$(git log --pretty=format:"%H" -1)"

git pull origin master

ENDCOMMIT="$(git log --pretty=format:"%H" -1)"
# echo "${COMMITID}"

# mkdir -p mattBuild

git diff --name-only $STARTCOMMIT..$ENDCOMMIT | {
  while IFS= read -r line
  do
    echo "copying $line"
    # rsync -R "$line" mattBuild
  done

}