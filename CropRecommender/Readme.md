# CropRecommender

This tool predicts that what will be the best crop to grow based on the soil conditions. 

# Setup

1. Create a virtual environment using the below command
```bash
python3 -m venv env
```

2. Activate the virtual environment
```bash
source env/bin/activate
```

3. All all the required dependencies specified in the requirement.txt file
``` 
pip install -r requirements.txt
```

4. Start the server
```bash
python3 recom.py
```
It will start the server on port 9000

# Use
Make a post request to `http://localhost:9000/predict` and send the below data as json:
```json
{
  "n": "Value of Nitrogen content in the soil",
  "p": "Value of Phosphorus content in the soil",
  "k": "Value of Potassium content in the soil",
  "temp": "Average temperature of the region",
  "hum": "Average humidity of the region",
  "ph": "pH value of soil",
  "rain": "Average amount of rainfall in the region"
}
```
