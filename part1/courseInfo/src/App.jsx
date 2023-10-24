/*eslint-disable*/

const App = () => {
    const course = "Half Stack application development";
    const part1 = "Fundamentals of React";
    const exercises1 = 10;
    const part2 = "Using props to pass data";
    const exercises2 = 7;
    const part3 = "State of a component";
    const exercises3 = 14;

    return (
        <div>
            <Header courseName={course} />

            <Content part={part1} exercises={exercises1} />

            <Content part={part2} exercises={exercises2} />

            <Content part={part3} exercises={exercises3} />

            <Total exc1={exercises1} exc2={exercises2} exc3={exercises3} />
        </div>
    );
};

const Header = (props) => {
    return (
        // <>
        <h1>{props.courseName}</h1>
        // </>
    );
};

const Content = (props) => {
    return (
        <p>
            {props.part}: {props.exercises}
        </p>
    );
};

const Total = (props) => {
    let total = Object.values(props).reduce((accumulator, value) => {
        return accumulator + value;
    }, 0);
    return <p>Number of excercises: {total}</p>;
};

export default App;
