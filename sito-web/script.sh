#!/bin/bash

#WARNING! use it only the first time u want to create all files needed by the site, reuse clear all the content u created!

cd chapters
myArray=("le misure" "moto in una dimensione" "forza e leggi di Newton" "moto in due e tre dimensioni" "applicazioni delle leggi di Newton" "quantità di moto" "sistemi di particelle" "cinematica dei moti rotatori" "dinamica dei moti rotatori" "momento angolare" "energia 1: lavoro ed energia cinetica" "energia 2: energia potenziale" "energia 3: conservazione dell'energia" "la gravitazione" "statica dei fluidi" "dinamica dei fluidi" "fenomeni oscillatori" "fenomeni ondulatori" "onde acustiche" "teoria della relatività ristretta" "temperatura" "proprietà molecolari dei gas" "prima legge della termodinamica" "entropia e seconda legge della termodinamica")
for i in ${!myArray[@]}; do
	name=${myArray[$i]}
	let "index=i+1"
	if [ $index -lt 10 ]
	then
		index="0$index"
	fi
  	echo "element $i has changed in $index and is $name"
	cat <<-END > "fisica-$index"\_"$name.html"
	<h1>$name</h1>
	<p></p>
	END
done
ls ../chapters/

