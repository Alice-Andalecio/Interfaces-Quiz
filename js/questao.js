function escondeForum(forum) {
        var display = document.getElementById(forum).style.display;

        if(display == "none")
            document.getElementById(forum).style.display = 'block';
        else
            document.getElementById(forum).style.display = 'none';
    }

