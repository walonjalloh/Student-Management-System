export default function Footer(){
    const year:string =  new Date().getFullYear().toString()
    return(
        <footer className="flex justify-between mx-4 items-center">
            <h1 className="font-extrabold text-lg">Walon&copy;{year}</h1>
            <p> All right Reserved</p>
        </footer>
    )
}