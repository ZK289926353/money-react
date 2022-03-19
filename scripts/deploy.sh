#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin https://github.com/ZK289926353/money-react.git  &&
git push -u origin master -f
cd -