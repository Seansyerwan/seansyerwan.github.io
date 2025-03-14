import vegasImage from "./vegas.png";
import taxesImage from "./taxes.png";
import triviaImage from "./trivia.png";

function Project({swapPage}){


    var position = window.scrollY;
    window.onscroll = function() {
    var currentpos = window.scrollY;

    if(position > currentpos){
        document.getElementById("general_toolbar").style.top = "0";
    }
    else{
        document.getElementById("general_toolbar").style.top = "-50px";
    }
    position = currentpos;
    }


    return(
      <><div id="general_toolbar">
            <a onClick={()=> swapPage('Experiences')}>University experiences</a>
        </div><h1>
                Welcome to my website!
            </h1><h2>
                About me:
            </h2><br /><p id="aboutme">
                I'm a 3rd year Computer Science and Software Engineering major.
                I've got a fair bit of experience with some programming languages:
                <br/>
                I've made programs using Java, C#, C, Python, Typescript, HTML, and as you can see before you, CSS and Javascript!
                <br/>
                I've also learned some C++, React and Rust and I have some experience with PostgreSQL and MongoDB!
                <br/>
                You can see about the projects I've published below!
            </p><h2>
                But enough about me, here's some of my projects!
            </h2><br /><h2>Blackjack using Typescript and HTML! </h2>
            
            <a href="https://github.com/Seansyerwan/blackjackproject">
                {/*My styling for the projects is like this: title, image to bring attention towards project, then blurb describing it.*/}
                <p id="project"><br />
                    <img src={vegasImage} /><br />
                    In this project I translated the game of Blackjack to Typescript! The game is simple: Beat the dealer without going over 21.<br /><br />

                    Currently, it shows the players "cards", with the first card from the dealer being shown to them as well.
                    Players can draw, double down, or stand.

                    The player also starts up with a number of chips, which can be either gained, or lost via playing.
                    If you run out of chips, that's game over! Though, you can always restart the page.<br />


                    Hopefully you can have a blast with it! You can check out the github page by clicking anywhere in this box!
                </p> </a><h2>Trivia!</h2>
                
                <a href="https://github.com/Seansyerwan/Trivia-Game">
                <p id="project">
                    <br />
                    <img src={triviaImage}/><br />
                    Wanna test your general knowledge skills? Why not give my game a spin!<br />

                    Within the game itself you can choose from a list of ten different topics, with 5 questions from it,
                    and the game continues til you wish to end it. Feel free to let me know any suggestions you might have for a topic!<br />
                    If you wanna give it a try, make sure to click on this box!
                </p></a><h2>Taxes! Sorta!</h2>
                <a href="https://github.com/Seansyerwan/python_tax_calc"><p id="project">
                    There are two certainties in life: death and taxes. This program can help with hypotheticals for the latter!
                    <br /><img src={taxesImage}/><br />
                    Were you ever curious about how much you'd be taxed on a wage of €1,000,000 per year? What about €1,000,000,000? Well this program can help!<br /><br />
                    Simply just input the income, tax credits and choose the social insurance group you (hypothetically would) belong to,
                    and the program will not only print out the data, but it also saves a formatted csv file to the directory you save the files in!<br /><br />

                    To access the github page for it right away, click anywhere in this box!
                </p></a><h2>A small portfolio project using C!</h2>
                <a href="https://github.com/Seansyerwan/portfolio-terminal-in-C"><p id="project">
                    Portfolios! It's a good way to summarise yourself, and this project can help you make a br/ief one! <br />

                    The way this program works is simple: you input the data that's requested, and if eligible (over 15), you will get a txt file written for you!<br /><br />

                    Once again, click somewhere in this box to access it.
                </p></a><h2>Pre-plan Minecraft playthroughs with this calculator!</h2>
                <a href="https://github.com/Seansyerwan/general_purpose_minecraft_calculators"><p id="project">
                    Want to help optimise your playthrough of Minecraft? This calculator could help!<br />

                    When playing through Minecraft, you may want to farm animals. However, you may need to consider how many resources it could take.
                    Be it seeds for chickens or wheat for cows, or even time, it could take a while! So this program is here to help you plan
                    around this. Simply put in the amount of animals you have, and then say how many you wish to get, and it does the calculations for you!<br /><br />

                    And as usual, make sure to click in this box to get the GitHub page.
                </p></a>
                
                <h2>An abhorrent "Sorting" algorithm!</h2>
                <a href="https://github.com/Seansyerwan/smart-sort"><p id="project">
                Inspired by silly sorting algorithms like bogosort and sleep sort comes my new algorithm, "Smart sort" [currently only in python 3].
                This "Sorting" algorithm makes the user answer a question for every single swap (based off of bubblesort swapping).
                If the user gets it right, it goes along as expected. However, if not, then the entire array is reshuffled! <br/>

                Given the nature of this program, this is meant to be a joke algorithm. I intend to make it more difficult in the future.
                The main objective is to quiz the user in questions they can't memorize naturally, as it's all random. 
                </p></a>
                
                <p>
                And that's that for now, but there's still more, with my university work on the 2nd page!
                Just click the link <b>at the top of the screen</b> and you'll get sent there
            </p></>


    );
}


export default Project
