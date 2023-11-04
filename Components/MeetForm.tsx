
export default function MeetForm() {
    const meet="meet"
    return (
        <div className="main">
            <form className="form">
                <input
                    type="text"
                    name="name"
                    value={meet}
                    className="input"
                />
            </form>
        </div>
    );
}
