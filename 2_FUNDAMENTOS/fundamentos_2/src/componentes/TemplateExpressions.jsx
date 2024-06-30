const TemplateExpressions = () =>{

    const name = 'Matheus';
    const data ={
        age: 31,
        job : "programmer",

    };
return(
    <div>
        <h1>Olá {name}, tudo bem?</h1>
        <p>Voce atua como : {data.job}</p>
        <p>{console.log('JSX React')}</p>
    </div>
)
}
export default TemplateExpressions;