# Dependencies
import pymongo
from flask import Flask, jsonify, render_template, request

# Create App
app = Flask(__name__)

# Connect to MongoDB through Heroku
conn = "mongodb://admin:firebolt@ds125716.mlab.com:25716/heroku_bs24rhck"
client = pymongo.MongoClient(conn)
db = client.heroku_bs24rhck

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/full")
def full():

    # Empty list for data
    full_data = []

    # Grab full data
    results = db.full.find()

    # Append data
    for result in results:
        character_info = {
            "character": result["character"],
            "full_name": result["full_name"],
            "blood_status": result["blood_status"],
            "house": result["house"],
            "species": result["species"],
            "image_url": result["image_url"],
            "first_appearance": result["first_appearance"],
            "last_appearance": result["last_appearance"] 
        }

        full_data.append(character_info)

    return jsonify(full_data)

@app.route("/stone")
def stone():

    # Empty list for data
    stone_data = []

    # Grab stone data
    results = db.stone.find()

    # Append data
    for result in results:
        character_info = {
            "character": result["character"],
            "full_name": result["full_name"],
            "blood_status": result["blood_status"],
            "house": result["house"],
            "species": result["species"],
            "image_url": result["image_url"],
            "first_appearance": result["first_appearance"],
            "last_appearance": result["last_appearance"],
            "year": result["year"]
        }

        stone_data.append(character_info)

    return jsonify(stone_data)

@app.route("/chamber")
def chamber():

    # Empty list for data
    chamber_data = []

    # Grab chamber data
    results = db.chamber.find()

    # Append data
    for result in results:
        character_info = {
            "character": result["character"],
            "full_name": result["full_name"],
            "blood_status": result["blood_status"],
            "house": result["house"],
            "species": result["species"],
            "image_url": result["image_url"],
            "first_appearance": result["first_appearance"],
            "last_appearance": result["last_appearance"],
            "year": result["year"]
        }

        chamber_data.append(character_info)

    return jsonify(chamber_data)

@app.route("/prisoner")
def prisoner():

    # Empty list for data
    prisoner_data = []

    # Grab prisoner data
    results = db.prisoner.find()

    # Append data
    for result in results:
        character_info = {
            "character": result["character"],
            "full_name": result["full_name"],
            "blood_status": result["blood_status"],
            "house": result["house"],
            "species": result["species"],
            "image_url": result["image_url"],
            "first_appearance": result["first_appearance"],
            "last_appearance": result["last_appearance"],
            "year": result["year"]
        }

        prisoner_data.append(character_info)

    return jsonify(prisoner_data)

@app.route("/goblet")
def goblet():

    # Empty list for data
    goblet_data = []

    # Grab goblet data
    results = db.goblet.find()

    # Append data
    for result in results:
        character_info = {
            "character": result["character"],
            "full_name": result["full_name"],
            "blood_status": result["blood_status"],
            "house": result["house"],
            "species": result["species"],
            "image_url": result["image_url"],
            "first_appearance": result["first_appearance"],
            "last_appearance": result["last_appearance"],
            "year": result["year"]
        }

        goblet_data.append(character_info)

    return jsonify(goblet_data)

@app.route("/phoenix")
def phoenix():

    # Empty list for data
    phoenix_data = []

    # Grab phoenix data
    results = db.phoenix.find()

    # Append data
    for result in results:
        character_info = {
            "character": result["character"],
            "full_name": result["full_name"],
            "blood_status": result["blood_status"],
            "house": result["house"],
            "species": result["species"],
            "image_url": result["image_url"],
            "first_appearance": result["first_appearance"],
            "last_appearance": result["last_appearance"],
            "year": result["year"]
        }

        phoenix_data.append(character_info)

    return jsonify(phoenix_data)

@app.route("/prince")
def prince():

    # Empty list for data
    prince_data = []

    # Grab prince data
    results = db.prince.find()

    # Append data
    for result in results:
        character_info = {
            "character": result["character"],
            "full_name": result["full_name"],
            "blood_status": result["blood_status"],
            "house": result["house"],
            "species": result["species"],
            "image_url": result["image_url"],
            "first_appearance": result["first_appearance"],
            "last_appearance": result["last_appearance"],
            "year": result["year"]
        }

        prince_data.append(character_info)

    return jsonify(prince_data)

@app.route("/hallows")
def hallows():

    # Empty list for data
    hallows_data = []

    # Grab hallows data
    results = db.hallows.find()

    # Append data
    for result in results:
        character_info = {
            "character": result["character"],
            "full_name": result["full_name"],
            "blood_status": result["blood_status"],
            "house": result["house"],
            "species": result["species"],
            "image_url": result["image_url"],
            "first_appearance": result["first_appearance"],
            "last_appearance": result["last_appearance"],
            "year": result["year"]
        }

        hallows_data.append(character_info)

    return jsonify(hallows_data)

@app.route("/stone_senti")
def stone_senti():
    
    # Grab sentiment results for book 1
    results = db.books.find()[0]

    stone_results = results["stone"]

    senti_results = stone_results["sentiment"]

    return jsonify(senti_results)

@app.route("/chamber_senti")
def chamber_senti():
    
    # Grab sentiment results for book 2
    results = db.books.find()[1]

    chamber_results = results["chamber"]

    senti_results = chamber_results["sentiment"]

    return jsonify(senti_results)

@app.route("/prisoner_senti")
def prisoner_senti():
    
    # Grab sentiment results for book 3
    results = db.books.find()[2]

    prisoner_result = results["prisoner"]

    senti_results = prisoner_result["sentiment"]

    return jsonify(senti_results)

@app.route("/goblet_senti")
def goblet_senti():
    
    # Grab sentiment results for book 4
    results = db.books.find()[3]

    goblet_results = results["goblet"]

    senti_results = goblet_results["sentiment"]

    return jsonify(senti_results)

@app.route("/phoenix_senti")
def phoenix_senti():
    
    # Grab sentiment results for book 5
    results = db.books.find()[4]

    phoenix_results = results["phoenix"]

    senti_results = phoenix_results["sentiment"]

    return jsonify(senti_results)

@app.route("/prince_senti")
def prince_senti():
    
    # Grab sentiment results for book 6
    results = db.books.find()[5]

    prince_results = results["prince"]

    senti_results = prince_results["sentiment"]

    return jsonify(senti_results)

@app.route("/hallows_senti")
def hallows_senti():
    
    # Grab sentiment results for book 7
    results = db.books.find()[6]

    hallows_results = results["hallows"]

    senti_results = hallows_results["sentiment"]

    return jsonify(senti_results)

@app.route("/family")
def family():

    # Empty list for family data
    family_data = []

    # Grab family tree data
    results = db.family_tree.find()

    for result in results:
        character_info = {
            "character": result["character"],
            "image_url": result["image_url"]
        }

        family_data.append(character_info)

    return jsonify(family_data)

# Run app
if __name__ == "__main__":
    app.run(debug=True)