# Adjusting colors for each segment
# The color specified (222, 110, 1) is in RGB, we need to convert it to a range of 0 to 1 for matplotlib
base_color = (222/255, 110/255, 1/255)

# Generating slightly different shades for each category
colors = [(base_color[0] * (1 - i*0.1), base_color[1] * (1 - i*0.1), base_color[2] * (1 - i*0.1)) 
                  for i in range(len(categories))]

# Creating the pie chart with adjusted colors
plt.figure(figsize=(8, 8))
plt.pie(hours, labels=categories, colors=colors, autopct='%1.1f%%', startangle=140)
plt.title("How Teachers Spend Their Time")
plt.show()
