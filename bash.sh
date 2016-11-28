#!/bin/bash
# My first script

STARTCOMMIT="$(git log --pretty=format:"%H" -1)"
echo "$STARTCOMMIT"

git pull origin master

ENDCOMMIT="$(git log --pretty=format:"%H" -1)"
echo "$ENDCOMMIT"
# echo "${COMMITID}"

# mkdir -p mattBuild

if [ "$STARTCOMMIT" != '$ENDCOMMIT' ]; then
    git diff --name-only $STARTCOMMIT..$ENDCOMMIT | {
    while IFS= read -r line
    do
        echo "copying $line"
        # rsync -R "$line" mattBuild
    done

    }
fi