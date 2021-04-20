const ticketValueToDisplayFromModel = (ticketModel) => {
    return {
        title: ticketModel.title,
        ticketNumber: ticketModel.ticketNumber,
        email: ticketModel.email,
        problemDescription: ticketModel.problemDescription,
        ticketStatusId: ticketModel.ticketStatusId,
        ticketLvlPriorId: ticketModel.ticketLvlPriorId,
        ticketActivitesId: ticketModel.ticketActivitesId,
        updatedAt: ticketModel.updatedAt
    }
};

module.exports = ticketValueToDisplayFromModel;