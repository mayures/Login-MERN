import React, { useState } from "react";

function Clock() {

    const [time, setTime] = useState(new Date().toLocaleTimeString("INDIA"));
    setInterval(() => setTime(new Date().toLocaleTimeString("UK"), 1000));
    return (<p>its time:{time}</p>);

}

export default Clock;