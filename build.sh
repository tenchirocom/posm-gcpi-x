#!/bin/bash
set -e

cd app

npm install
npm run build

cd ..

rm -rf public/gcpi
mkdir -p public/gcpi
cp -a app/build/. public/gcpi/