const Buttons = () => {
    return (
        <div className="flex justify-center">
            <div className="mb-3 x1:w-96">
                <select className="form-select appearance-none
                block
                w-full
                px-3
                py-1.5
                rounded
                m-0">
                <option value="1 Bedroom">1 Bedroom</option>
                <option value="2 Bedroom">2 Bedroom</option>
                <option value="3 Bedroom">3 Bedroom</option>
                <option value="4 Bedroom">4 Bedroom</option>
                <option value="5 Bedroom">5 Bedroom</option>
                <option value="6 Bedroom">6 Bedroom</option>
                <option value="7 Bedroom">7 Bedroom</option>
            </select>
            </div>
        </div>
    )
}

export default Buttons;