document.addEventListener('DOMContentLoaded', () => {
    const bidForm = document.getElementById('bid-form');
    const bidAmountInput = document.getElementById('bid-amount');
    const currentBidElement = document.getElementById('current-bid');
    const biddingHistoryList = document.getElementById('bidding-history-list');

    let currentBid = 100; // Initial bid value
    let biddingHistory = [];

    // Update the bidding history
    function updateBiddingHistory(bid) {
        const listItem = document.createElement('li');
        listItem.textContent = `Bid: $${bid}`;
        biddingHistoryList.appendChild(listItem);
    }

    // Handle form submission
    bidForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const bidAmount = parseInt(bidAmountInput.value);
        
        if (bidAmount <= currentBid) {
            alert('Your bid must be higher than the current bid.');
            return;
        }
        
        // Update the current bid
        currentBid = bidAmount;
        currentBidElement.textContent = currentBid;

        // Update bidding history
        biddingHistory.push(bidAmount);
        updateBiddingHistory(bidAmount);

        // Clear the input field
        bidAmountInput.value = '';
    });
});