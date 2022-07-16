import router from "next/router";


const ErrorComponent=()=>{

    const returnToMainPage=()=>{
        router.push({ pathname: "/"});
    }

    return <div className="error-wrapper">
    <p>Brak wyników wyszukiwania</p>
    <button onClick={(e:any)=>returnToMainPage()}>Wróć na stronę główną</button>
</div>
}

export default ErrorComponent;