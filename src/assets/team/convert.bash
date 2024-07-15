#!/bin/bash

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null
then
    echo "cwebp could not be found, please install it first."
    exit
fi

# Loop through all files in the current directory
for file in *; do
    # Check if the file is a regular file and is an image
    if [[ -f "$file" && "$file" =~ \.(jpg|jpeg|png|tiff|bmp)$ ]]; then
        # Extract the file name without the extension
        filename="${file%.*}"
        # Convert the file to webp format
        cwebp -q 100 "$file" -o "$filename.webp"
        echo "Converted $file to $filename.webp"
    fi
done

echo "Conversion completed."
