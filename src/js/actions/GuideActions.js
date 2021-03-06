import Dispatcher from "../dispatcher/Dispatcher";

module.exports = {
  ignore: function (we_vote_id) {
    Dispatcher.loadEndpoint("organizationFollowIgnore", { organization_we_vote_id: we_vote_id} );
  },

  follow: function (we_vote_id) {
    Dispatcher.loadEndpoint("organizationFollow", { organization_we_vote_id: we_vote_id} );
  },

  stopFollowing: function (we_vote_id) {
    Dispatcher.loadEndpoint("organizationStopFollowing", { organization_we_vote_id: we_vote_id} );
  },

  retrieveGuidesToFollow: function (election_id, str) {
    Dispatcher.loadEndpoint("voterGuidesToFollowRetrieve", { google_civic_election_id: election_id,
      maximum_number_to_retrieve: 15, search_string: str || "" });
  },

  retrieveGuidesToFollowByBallotItem: function (ballot_item_we_vote_id, kind_of_ballot_item) {
    Dispatcher.loadEndpoint("voterGuidesToFollowRetrieve", {
      ballot_item_we_vote_id: ballot_item_we_vote_id, kind_of_ballot_item: kind_of_ballot_item
    });
  },

  retrieveGuidesFollowed: function () {
    Dispatcher.loadEndpoint("voterGuidesFollowedRetrieve");
  }
};
