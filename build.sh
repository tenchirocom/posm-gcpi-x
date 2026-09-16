#!/bin/bash
set -e

cd app

npm install
npm run build

cd ..

rm -rf public/gcpi
mkdir -p public/gcpi
cp -a app/build/. public/gcpi/

# Loop through all language codes found in the locale directory
for lang_dir in locale/*/; do
    if [ -f "${lang_dir}LC_MESSAGES/django.po" ]; then
        msgfmt "${lang_dir}LC_MESSAGES/django.po" -o "${lang_dir}LC_MESSAGES/django.mo"
        echo "Compiled locale for: $(basename "$lang_dir")"
    fi
done

echo "Updated all locales."
