

export async function getHomePage(id) {

    const url = id ?  `/api/${id}` : "/api/"
    const res= await fetch(url)

    if (!res.ok) {
        throw {

            message: "Failed to fetch campGear",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.products

}


export async function getShop(id) {

    const url = id ?  `/api/shop/${id}` : "/api/shop"
    const res= await fetch(url)

    if (!res.ok) {
        throw {

            message: "Failed to fetch campGear",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.products

}

export async function getClimbing(id) {

    const url = id ?  `/api/climbing/${id}` : "/api/climbing"
    const res= await fetch(url)

    if (!res.ok) {
        throw {
            
            message: "Failed to fetch campGear",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.products

}

export async function getHiking(id) {

    const url = id ?  `/api/hiking/${id}` : "/api/hiking"
    const res= await fetch(url)

    if (!res.ok) {
        throw {
            
            message: "Failed to fetch campGear",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.products

}