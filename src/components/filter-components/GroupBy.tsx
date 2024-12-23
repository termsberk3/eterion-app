const GroupBy = () => {
    return (
        <div className="w-full h-220px border border-gray-200 rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-4">Brand:</h3>
            <div className="space-y-2">
                <div className="flex items-center">
                    <input type="checkbox" id="apple" name="brand" value="apple" className="mr-2" />
                    <label htmlFor="apple">Apple</label>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" id="samsung" name="brand" value="samsung" className="mr-2" />
                    <label htmlFor="samsung">Samsung</label>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" id="xiaomi" name="brand" value="xiaomi" className="mr-2" />
                    <label htmlFor="xiaomi">Xiaomi</label>
                </div>
                <div className="flex items-center">
                    <input type="checkbox" id="huawei" name="brand" value="huawei" className="mr-2" />
                    <label htmlFor="huawei">Huawei</label>
                </div>
            </div>
        </div>
    )
}

export default GroupBy