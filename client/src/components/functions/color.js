export default function Color(priority) {
    let color;

    if (priority === "High") {
        color = "red";
    } else if (priority === "Medium") {
        color = "blue";
    } else {
        color = "green";
    }
    return color
}