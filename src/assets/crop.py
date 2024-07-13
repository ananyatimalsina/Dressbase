from PIL import Image

BASE_WIDTH = 400
BASE_HEIGHT = 600

width = 400
x = 0

def crop_image(image_path, height,  y):
    # Open the image
    image = Image.open(image_path).resize((BASE_WIDTH, BASE_HEIGHT))

    # Calculate the crop box coordinates
    left = x
    upper = y
    right = x + width
    lower = y + height

    # Crop the image
    cropped_image = image.crop((left, upper, right, lower))

    return cropped_image

#background
image_path = "./background.jpg"
output_path = "./background/"

crop_image(image_path, 104, 0).save(output_path + "glasses.png")
crop_image(image_path, 104, 131).save(output_path + "top.png")
crop_image(image_path, 231.25, 260).save(output_path + "shorts.png")
crop_image(image_path, 82, 516.25).save(output_path + "shoes.png")

# Model Original
image_path = "./model.png"
output_path = "./model_original/"

crop_image(image_path, 104, 0).save(output_path + "glasses.png")
crop_image(image_path, 104, 131).save(output_path + "top.png")
crop_image(image_path, 231.25, 260).save(output_path + "shorts.png")
crop_image(image_path, 82, 516.25).save(output_path + "shoes.png")

# Model glasses
image_path = "./model_glasses.png"
output_path = "./model_modified/glasses.png"

crop_image(image_path, 104, 0).save(output_path)

# Model top
image_path = "./model_top.png"
output_path = "./model_modified/top.png"

crop_image(image_path, 104, 131).save(output_path)

# Model shorts
image_path = "./model_shorts.png"
output_path = "./model_modified/shorts.png"

crop_image(image_path, 231.25, 260).save(output_path)

# Model shoes
image_path = "./model_shoes.png"
output_path = "./model_modified/shoes.png"

crop_image(image_path, 82, 516.25).save(output_path)