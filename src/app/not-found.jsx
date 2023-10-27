import Image from "next/image"

export default function NotFound() {
    return (
        <>
            <h1>Opps! 404</h1>
            <p>Not Found</p>
            <div>
                <Image
                    height={300}
                    width={300}
                    src="https://http.dog/static/codes/dogs/medium/404.webp"
                    alt="Cachorro Cavando"
                />
            </div>
        </>
    )
}