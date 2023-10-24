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

            <Content ex1={{part: part1, exc: exercises1}} ex2={{part: part2, exc: exercises2}} ex3={{part: part3, exc: exercises3}}/>

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
        <div>
            <Part part={props.ex1.part} exercises={props.ex1.exc} />
            <Part part={props.ex2.part} exercises={props.ex2.exc} />
            <Part part={props.ex3.part} exercises={props.ex3.exc} />
        </div>
    );
};

const Part = (props) => {
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
