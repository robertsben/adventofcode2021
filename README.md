# adventofcode2021

<https://adventofcode.com/2021>

## Running

Use make, and supply the day you want an answer to:

    make result DAY=1


## Development

Some apps may have a development version:

    make dev DAY=1

All day solutions MUST be in a top level folder named `day_{x}`.  
All day solutions MUST include a makefile that has a `result` target, which will run the program to produce that days result.  
All day solutions SHOULD include a makefile target `dev`, which allows you to run a dev version.  