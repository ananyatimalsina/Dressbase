from PIL import Image

width = 400
height = 104

def crop_image(image_path, output_path, x, y, width = width, height = height):
    # Open the image
    image = Image.open(image_path)

    # Calculate the crop box coordinates
    left = x
    upper = y
    right = x + width
    lower = y + height

    # Crop the image
    cropped_image = image.crop((left, upper, right, lower))

    # Save the cropped image
    cropped_image.save(output_path)

# Example usage
image_path = "/home/anon/Desktop/aestheticarena_com_downloaded_image_XCGh.jpg"
output_path = "/home/anon/Desktop/cropped_image.jpg"

x = 0
y = 0

crop_image(image_path, output_path, x, y)
crop_image(image_path, output_path, x, y)
crop_image(image_path, output_path, x, y, height=100)
crop_image(image_path, output_path, x, y)