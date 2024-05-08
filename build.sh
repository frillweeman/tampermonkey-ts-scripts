#!/bin/bash

for file in ./src/*.ts; do
  # compile and inline dependencies
  npx tsup "$file" 

  # add banner to compiled file
  banner=$(awk '/^\/\//{flag=1;print;next} !/^\/\//{flag=0} flag' "$file")
  js_file="./dist/$(basename "$file" .ts).js"
  echo "$banner" | cat - "$js_file" > temp && mv temp "$js_file"
done

echo "Done"
