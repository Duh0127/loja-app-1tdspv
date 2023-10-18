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
                    src="https://httpstatusdogs.com/img/404.jpg"
                    alt="Cachorro Cavando"
                />
            </div>
        </>
    )
}