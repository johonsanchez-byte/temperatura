suma = 0

def on_button_pressed_a():
    global suma
    suma =  1+suma
    suma
    basic.show_number(suma)
input.on_button_pressed(Button.A, on_button_pressed_a)
