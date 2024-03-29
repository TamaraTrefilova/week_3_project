
# Beep Boop

#### The week 3 independent project at Epicodus 06-14-2019

#### Author: Tamara Trefilova


## Description:

#### Create a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

#### Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
#### Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
#### Numbers that contain a 3: all digits are replaced (all digits) with "I'm sorry, Dave. I'm afraid I can't #### do that."
#### These exceptions are written from least to most important. The first exception should apply unless the #### second exception does, and the same with the second and third. So, for example, in the finished program,

#### The number 13 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."
#### The number 21 should be replaced with "Boop".
#### The number 32 should be replaced with "I'm sorry, Dave. I'm afraid I can't do that."
#### A user should be able to enter a new number and see new results over and over again.
## Beep Boop Specs:

| Behaviors       | Input           | Output      |
| ------------- |:-----------------:| -----------:|
| * User should get a notification if entered value is not a numeric value   | "asd"  | "It looks like you didn't enter anything. Please enter a valid number!"  |
| * User should get a notification if entered value is negative   | -1   | "It looks like you entered either '0' or negative number. Please enter a valid number!"   |
| * User should get a notification if entered value is '0'  | 0   | "It looks like you entered either '0' or negative number. Please enter a valid number!"   |
| * The program returns a range of numbers from 0 to the users inputted number   | 9    | "0", "Beep!", "Boop","I'm Sorry..." ,5,6,7,8,9     |   |
| * If number contains 3 , output should be: "I'm sorry, Dave. I'm afraid I can't do that."  | 3 or 13 or 23 or 36    | "I'm sorry, Dave. I'm afraid I can't do that."      |
| * If number contains 2 , output should be: "Boop"    |2 or 21, 25   | "Boop"      |
| * If number contains 1 , output should be: "Beep" | 1 or 15 or 17       |"Beep"|



## Setup/Installation Requirements

* Access to internet
* Computer
* Link to GitHub


_This is are no extra requirements_

## Known Bugs

There are no issues.

## Support and contact details

tamara.trefilova@gmail.com
## GitHub pages : https://tamaratrefilova.github.io/week_3_project/

## Technologies Used

HTML, CSS, Bootstrap, jQuery and some fantasy

### License

*GPI*

Copyright (c) 2019 **Tamara Trefilova**
