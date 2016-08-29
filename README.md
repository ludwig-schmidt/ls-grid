# ls-grid
A tiny responsive css-grid library (4kb compiled).
ls-grid is written in Sass syntax (not SCSS!).

## Installation
You can install this package using [Bower](http://bower.io/):

run `bower install ls-grid`

Or just grab a copy of the `_grid.sass` file located in the /sass folder. 

Now import the file into your main .sass file using: 

    @import 'grid'


## Customize Grid Size

The grid width is calculated with the following formula: 

    number of columns * column width + (number of columns -1) * gutter width
    
In the top area of the `_grid.sass` file you can change the grid variables. The default settings look like this:

    $columns: 12 !default
    $column-width: 73px !default
    $gutter-width: 24px !default
    
If you put these values into the formula you get a 1140px grid with 12 columns:

    12 * 73px + (12-1) * 24px = 1140px
    
*Tip: Use a grid calculator to find a good grid size (e.g.:http://gridcalculator.dk/#/1140/12/24/0)*

![alt tag](https://github.com/ludwig-schmidt/ls-grid/blob/master/img/grid.png)

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


## Use sections, containers, rows and columns

![alt tag](https://github.com/ludwig-schmidt/ls-grid/blob/master/img/grid-instructions.jpg)

Of course you can use any html tag for any class of this grid to make it more semantic:

    e.g. <section class="section"></section>
    or <nav class="container"></nav>

### Sections

Sections are the main wrappers of this grid: everything goes inside a section. Sections control the vertical rythm and space. One section can contain multiple containers.
    
    <div class="section"></div>
    
### Containers

Containers control the width of all contents and wrap around rows and columns. One container can contain multiple rows. The maximum with of the containers equals `$grid-width`.

    <div class="section">
        <div class="container">
        </div>
    </div>
    
### Rows

Rows wrap around columns. The number of specified columns inside a row must be smaller or equal to the maximum number of columns (`$columns`). All columns inside a row are displayed on the same horizontal line.

    <div class="section">
        <div class="container">
            <div class="row"></div>
        </div>
    </div>
    
### Columns

Columns specify the width of layout parts. Each column has a width and push value given by class names: 

    <div class="col w-6 p-3"></div>
    
    w-* specifies the width 
    p-* specifies the push from left
    
In our example with 12 columns the total number of width and push values in a row must be smaller than 12.

    <div class="col w-5"></div>
    <div class="col w-5 p-2"></div>
    
    5 + 5 + 2 = 12
    
## ls-grid in action

Websites using ls-grid: 

http://www.ludwigschmidt.berlin