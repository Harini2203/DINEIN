import React from 'react';


export default function OrderStatus({ order, onRefresh }) {
    if (!order) return null;
    return (
        <div className="card">
            <h2>Order Status</h2>
            <p className="small">Status: <strong>{order.status}</strong></p>
            {order.payment?.status === 'paid' ? (
                <>
                    <p>Payment <strong>{order.payment.method.toUpperCase()}</strong> ✓</p>
                    <p className="small">Txn: {order.payment.txnId}</p>
                    <p>Thank you! Enjoy your meal. 🍽️</p>
                </>
            ) : (
                <>
                    <p>Your order is being processed.</p>
                    <button className="btn" onClick={onRefresh}>Refresh</button>
                </>
            )}
        </div>
    );
}