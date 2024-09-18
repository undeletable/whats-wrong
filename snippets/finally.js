try {
    throw new Error("dummy error");
} finally (error) {
    console.log(error);
}
