export function Invitation(props) {
    return (<p>Subject

        Subject : {props.party}
        To : {props.email}

        Hi , {props.name}

        I am having a birthday party next Friday at my Home . Would you like to come ? It will be fun . Lots of people from my school are coming . you know some of them -{props.persons}
        
        My house is behind our school , near {props.venue}
        
        I hope you will come and see you soon .

        from ,
        {props.from}
        

    </p>)


}