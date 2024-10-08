
function Experiences({swapPage}){


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
    <><div id="page2">

    <div id="general_toolbar">
        <a onClick={() => swapPage('Project')}>Personal Projects</a>
    </div>

    <h1>
        Curious about my other things I've done in University? Look no further!
    </h1>

    <h2>Student Senate!</h2>
    <p id="irl">
        Since 2022, I've been an active member of the Student Senate on campus! This involves Student Senators (like myself) meeting monthly, discussing
        affairs concerning the students' union (like officer reports, reports from the Union of Students Ireland), discussing proposals, and
        getting to collaborate, draft, and propose motions to vote on!
        <br/><br/>
        I've passed multiple motions, working on several, and continue to do so, with
        the hope of making a better campus for all students!
    </p>

    <h2>My time on the Games Society Committee!</h2>
    <p id="irl">
        Being in the committee for one of the biggest societies on campus was a fantastic experience. I got to meet loads of amazing folks,
        help manage the LAN side of things for the society, run events, get equipment that the society needed, help make decisions for the years to come,
        and that's before even mentioning the organization for Dominicon! 
        <br/><br/>
        In total, we ended up raising 5000 euros for Threshold, a charity helping those
        struggling with housing! It was by far one of the most fun experiences I could have had and I'll be forever grateful for the friends
        I made during my time.
    </p>

    <h2>My work with the Pride Society!</h2>
    <p id="irl">
        As the secretary from 2023-2024, it was my responsibility as a core member of the committee to help out where I could, but also to
        take the minutes for meetings, organize them, upload and share them with ourselves, and to send out communications with external groups
        when necessary.
        <br/><br/>
        This turned out to be a really interesting experience as I was given the opportunity to represent the society with official meetings
        soon into my term, and throughout, keeping in touch with the Students Union and others, while also running events like the weekly coffee
        mornings (where I would keep my love of tea up!)
        <br/><br/>
        As a group that was always so near and dear to me I've been honored to work for them, and as of May 2024, I was elected as the Support and Equality officer for 2024-2025, and I do hope to keep up the work for the society!
    </p>

    <h2>First year society experience!</h2>
    <p id="irl">
        In first year, I decided I wanted to dive right into the social life of what university life had to offer!
        This meant getting in society committees, like the tea society and the arts & crafts society! In both of these societies, I was officially
        the first year representative, whose job was to raise concerns and promote the society from a first year's perspective. However,
        this couldn't be further from the truth!
        <br/><br/>
        In the absence of the equipment officer for the tea society, I became the de facto equipment officer for tea,
        often grabbing the teabags, getting the milk, making sure that there was adequate supply throughout the year for all the events,
        all while promoting the society!
        <br/>
        Furthermore, while first year rep for arts & crafts, I helped run multiple events like some video game sessions,
        and helped facilitate collaborations with other societies!
        <br/>
        Just because I was on these committees didn't mean I limited myself to just being involved in their events though....
        <br/>
        Within the then Literary and Debating Society, I wrote multiple articles for their student journal, the Silver Hand Journal,
        where I won an award for the best Review of the year in 2023! I also represented the university via the Irish Times debates in 2022.
    </p>

    <h2>Other things??</h2>
    <p id="irl">
        One thing I've taken to since 2nd year has been chipping away at courses for programming languages! It's how I've started with C#, C++ and more!
        <br/>
        As of the time of writing, I have gotten <b>Six</b> certificates from these courses, and I'll be updating them as I go!
        <br/><br/>
        1. C Programming For Beginners - Master the C Language<br/>
        2. Ultimate Rust Crash Course<br/>
        3. The Git & Github Bootcamp<br/>
        4. Learn Python Programming Masterclass<br/>
        5. Learn C# for Beginners Crash Course<br/>
        6. Complete C# Masterclass
    </p>

    <h3>To see my projects, please click the link at the top of the screen!</h3>

    </div>




</>
);
}

export default Experiences
