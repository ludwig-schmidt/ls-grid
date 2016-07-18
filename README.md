# ls-grid
A tiny responsive grid library

## Installation
You can install this package using [Bower](http://bower.io/):

run `bower install ls-grid`

Or just grab a copy of the `_grid.sass` file located in the /sass folder. 

Now import the file into your main .sass file using: 

    @import 'grid'

## Basic Use

The Basic html structure looks like this: 

    <div class="section">
        <div class="container">
            <div class="row">
                <div class="col w-6"></div>
                <div class="col w-6"></div>
            </div>
        </div>
    </div>

## Customize Grid Size

The grid width is calculated with the following formula: 

    number of columns * column width + (number of columns -1) * gutter width
    
In the top area of the `_grid.sass` file you can change the grid variables. The default settings look like this:

    $columns: 12 !default
    $column-width: 73px !default
    $gutter-width: 24px !default
    
If you put these values into the formula you get a 1140px grid with 12 columns:
    12 * 73px + (12-1) * 24px = 1140px