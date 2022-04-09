export default function FormField({ tag, id, type }) {
    return (
        <div className="field">
            <label htmlFor={id}>{tag}</label>
            <input type={type} id={id} />
        </div>
    )
}