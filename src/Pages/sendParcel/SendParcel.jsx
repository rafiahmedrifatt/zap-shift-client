import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useLoaderData } from 'react-router';

const SendParcel = () => {
    const data = useLoaderData()
    console.log(data);
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors }
    } = useForm({
        defaultValues: {
            documentType: 'document',
            parcelName: '',
            parcelWeight: '',
            senderName: '',
            senderWireHouse: '',
            senderAddress: '',
            senderContactNo: '',
            senderRegion: '',
            pickupInstruction: '',
            receiverName: '',
            receiverWireHouse: '',
            receiverAddress: '',
            receiverContactNo: '',
            receiverRegion: '',
            deliveryInstruction: ''
        }
    });

    const documentType = watch('documentType');

    const onSubmit = (data) => {
        console.log('Form Data:', data);
    };

    const regions = data.map(singleData => singleData.region);



    const wireHouses = [
        'Wire House 1',
        'Wire House 2',
        'Wire House 3',
        'Wire House 4'
    ];
    return (
        <div className="max-w-8xl mb-50 mt-5 mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-8">Add Parcel</h1>

            <div className="space-y-6">
                {/* Document Type Selection */}
                <div>
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">Enter your parcel details</h2>
                    <div className="flex space-x-6">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                value="document"
                                {...register('documentType')}
                                className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                            />
                            <span className="text-gray-700">Document</span>
                        </label>
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="radio"
                                value="non-document"
                                {...register('documentType')}
                                className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                            />
                            <span className="text-gray-700">Non-Document</span>
                        </label>
                    </div>
                </div>

                {/* Parcel Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Parcel Name
                        </label>
                        <input
                            type="text"
                            {...register('parcelName', { required: 'Parcel name is required' })}
                            placeholder="Parcel Name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                        {errors.parcelName && (
                            <p className="text-red-500 text-sm mt-1">{errors.parcelName.message}</p>
                        )}
                    </div>

                    {/* Conditional Weight Input */}
                    {documentType === 'non-document' && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Parcel Weight (KG)
                            </label>
                            <input
                                type="number"
                                step="0.1"
                                {...register('parcelWeight', {
                                    required: documentType === 'non-document' ? 'Weight is required for non-document parcels' : false,
                                    min: { value: 0.1, message: 'Weight must be greater than 0' }
                                })}
                                placeholder="Parcel Weight (KG)"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                            {errors.parcelWeight && (
                                <p className="text-red-500 text-sm mt-1">{errors.parcelWeight.message}</p>
                            )}
                        </div>
                    )}
                </div>

                {/* Sender and Receiver Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Sender Details */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Sender Details</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Sender Name</label>
                                <input
                                    type="text"
                                    {...register('senderName', { required: 'Sender name is required' })}
                                    placeholder="Sender Name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                                {errors.senderName && (
                                    <p className="text-red-500 text-sm mt-1">{errors.senderName.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Sender Pickup Wire house</label>
                                <Controller
                                    name="senderWireHouse"
                                    control={control}
                                    rules={{ required: 'Please select a wire house' }}
                                    render={({ field }) => (
                                        <select
                                            {...field}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        >
                                            <option value="">Select Wire house</option>
                                            {wireHouses.map((house) => (
                                                <option key={house} value={house}>{house}</option>
                                            ))}
                                        </select>
                                    )}
                                />
                                {errors.senderWireHouse && (
                                    <p className="text-red-500 text-sm mt-1">{errors.senderWireHouse.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                                <input
                                    type="text"
                                    {...register('senderAddress', { required: 'Address is required' })}
                                    placeholder="Address"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                                {errors.senderAddress && (
                                    <p className="text-red-500 text-sm mt-1">{errors.senderAddress.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Sender Contact No</label>
                                <input
                                    type="tel"
                                    {...register('senderContactNo', { required: 'Contact number is required' })}
                                    placeholder="Sender Contact No"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                                {errors.senderContactNo && (
                                    <p className="text-red-500 text-sm mt-1">{errors.senderContactNo.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Your Region</label>
                                <Controller
                                    name="senderRegion"
                                    control={control}
                                    rules={{ required: 'Please select your region' }}
                                    render={({ field }) => (
                                        <select
                                            {...field}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        >
                                            <option value="">Select your region</option>
                                            {regions.map((region) => (
                                                <option key={region} value={region}>{region}</option>
                                            ))}
                                        </select>
                                    )}

                                />
                                {errors.senderRegion && (
                                    <p className="text-red-500 text-sm mt-1">{errors.senderRegion.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Instruction</label>
                                <textarea
                                    {...register('pickupInstruction')}
                                    placeholder="Pickup Instruction"
                                    rows="3"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Receiver Details */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-4">Receiver Details</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Receiver Name</label>
                                <input
                                    type="text"
                                    {...register('receiverName', { required: 'Receiver name is required' })}
                                    placeholder="Receiver Name"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                                {errors.receiverName && (
                                    <p className="text-red-500 text-sm mt-1">{errors.receiverName.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Receiver Delivery Wire house</label>
                                <Controller
                                    name="receiverWireHouse"
                                    control={control}
                                    rules={{ required: 'Please select a wire house' }}
                                    render={({ field }) => (
                                        <select
                                            {...field}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        >
                                            <option value="">Select Wire house</option>
                                            {wireHouses.map((house) => (
                                                <option key={house} value={house}>{house}</option>
                                            ))}
                                        </select>
                                    )}
                                />
                                {errors.receiverWireHouse && (
                                    <p className="text-red-500 text-sm mt-1">{errors.receiverWireHouse.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Receiver Address</label>
                                <input
                                    type="text"
                                    {...register('receiverAddress', { required: 'Receiver address is required' })}
                                    placeholder="Address"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                                {errors.receiverAddress && (
                                    <p className="text-red-500 text-sm mt-1">{errors.receiverAddress.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Receiver Contact No</label>
                                <input
                                    type="tel"
                                    {...register('receiverContactNo', { required: 'Receiver contact number is required' })}
                                    placeholder="Receiver Contact No"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                                {errors.receiverContactNo && (
                                    <p className="text-red-500 text-sm mt-1">{errors.receiverContactNo.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Receiver Region</label>
                                <Controller
                                    name="receiverRegion"
                                    control={control}
                                    rules={{ required: 'Please select receiver region' }}
                                    render={({ field }) => (
                                        <select
                                            {...field}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                        >
                                            <option value="">Select your region</option>
                                            {regions.map((region) => (
                                                <option key={region} value={region}>{region}</option>
                                            ))}
                                        </select>
                                    )}
                                />
                                {errors.receiverRegion && (
                                    <p className="text-red-500 text-sm mt-1">{errors.receiverRegion.message}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Instruction</label>
                                <textarea
                                    {...register('deliveryInstruction')}
                                    placeholder="Delivery Instruction"
                                    rows="3"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pickup Time Note */}
                <div className="text-sm text-gray-600">
                    * Pickup Time 4pm-7pm Approx.
                </div>

                {/* Submit Button */}
                <button
                    type="button"
                    onClick={handleSubmit(onSubmit)}
                    className="w-full md:w-auto px-8 py-3 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors"
                >
                    Proceed to Confirm Booking
                </button>
            </div>
        </div>
    );
};

export default SendParcel;



