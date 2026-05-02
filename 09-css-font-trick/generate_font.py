# Generate an obfuscated font with shuffled digit glyphs
# pip install fonttools

from fonttools import ttLib
import random, json

def create_obfuscated_font(input_font: str, output_font: str, mapping_file: str):
    tt = ttLib.TTFont(input_font)
    digits = list('0123456789')
    shuffled = digits.copy()
    random.shuffle(shuffled)
    mapping = dict(zip(digits, shuffled))

    print(f"Digit mapping: {mapping}")
    # Save mapping for server-side encoding
    with open(mapping_file, 'w') as f:
        json.dump(mapping, f)

    # Apply mapping to cmap (simplified)
    # Full implementation depends on font structure
    tt.save(output_font)
    return mapping

# Example usage:
# mapping = create_obfuscated_font('regular.ttf', 'obfuscated.woff2', 'digit_mapping.json')
