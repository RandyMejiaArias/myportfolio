import React from 'react';

export default () =>(
    <form className="mt-16 text-center">
        <label className="block text-white text-sm font-bold mb-2">Si deseas información, presupuestos o tienes algún proyecto en mente, no dudes en escribirme.</label>
        <div className="flex bg-white border p-2">
            <textarea name="contact-content" className="flex-1 py-2 px-3 focus:outline-none"></textarea>
            <button className="btn ml-4">Enviar</button>
        </div>
    </form>
);