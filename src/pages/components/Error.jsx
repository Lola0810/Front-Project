export default function Error({ code, message }) {
    return (
        <div className="error__field">
            <h1>{code}</h1>
            <h3>{message}</h3>
        </div>
    )
}