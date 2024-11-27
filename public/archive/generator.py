import os
import json
import re

# Define the source folder (main folder)
source_folder = r"C:\Users\Hatem\Desktop\MyProjects\THREE JS\Starting\my-threejs-app\public\models"

# Define the output JSON file name
json_filename = "structure.json"

# Get the directory where this script is located
script_directory = os.path.dirname(os.path.abspath(__file__))

# Function to sanitize keys
def sanitize_key(key):
    # Remove "_T" and replace "-" with "_"
    key = re.sub(r"_T$", "", key)  # Remove trailing "_T"
    key = key.replace("-", "_")  # Replace "-" with "_"
    return key

# Function to recursively build the structure
def build_structure(base_folder, relative_path=""):
    structure = {}
    folder_path = os.path.join(base_folder, relative_path)

    for item in os.listdir(folder_path):
        item_path = os.path.join(folder_path, item)
        if os.path.isdir(item_path):
            # If it's a folder, recurse into it
            sanitized_key = sanitize_key(item)
            structure[sanitized_key] = build_structure(base_folder, os.path.join(relative_path, item))
        elif item.endswith(".glb"):  # Only include .glb files
            # If it's a file, add it to the structure with its relative path
            sanitized_key = sanitize_key(os.path.splitext(item)[0])  # Remove extension and sanitize
            file_relative_path = os.path.join(relative_path, item).replace("\\", "/")
            structure[sanitized_key] = f"/models/{file_relative_path}"

    return structure

# Build the structure starting from the source folder
result_structure = build_structure(source_folder)

# Save the structure as a JSON file in the same directory as this script
output_path = os.path.join(script_directory, json_filename)
with open(output_path, "w") as json_file:
    json.dump(result_structure, json_file, indent=4)

print(f"JSON structure saved to: {output_path}")
