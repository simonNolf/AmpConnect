const byte PIN_SON = 8;

void setup()
{
  pinMode(PIN_SON, OUTPUT);
  
  tone(PIN_SON, 400); 
  
  Serial.begin(9600);
}

void loop()
{
  Serial.println(analogRead(A0));
  
  if(analogRead(A0) >= 1000){
    noTone(8);
  }
  else{
    tone(PIN_SON, 400);
  }
  
  delay(200);
}