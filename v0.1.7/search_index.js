var documenterSearchIndex = {"docs": [

{
    "location": "convenience.html#",
    "page": "Convenience",
    "title": "Convenience",
    "category": "page",
    "text": ""
},

{
    "location": "convenience.html#Convenience-1",
    "page": "Convenience",
    "title": "Convenience",
    "category": "section",
    "text": "POMDPModelTools contains default implementations for some POMDPs.jl functions.For a complete list of default implementations, see convenient_implementations.jl."
},

{
    "location": "distributions.html#",
    "page": "Distributions",
    "title": "Distributions",
    "category": "page",
    "text": ""
},

{
    "location": "distributions.html#Distributions-1",
    "page": "Distributions",
    "title": "Distributions",
    "category": "section",
    "text": "POMDPModelTools contains several utility distributions to be used in the POMDPs transition and observation functions. These implement the appropriate methods of the functions in the distributions interface.This package also supplies showdistribution for pretty printing distributions as unicode bar graphs to the terminal."
},

{
    "location": "distributions.html#POMDPModelTools.SparseCat",
    "page": "Distributions",
    "title": "POMDPModelTools.SparseCat",
    "category": "type",
    "text": "SparseCat(values, probabilities)\n\nCreate a sparse categorical distribution.\n\nvalues is an iterable object containing the possible values (can be of any type) in the distribution that have nonzero probability. probabilities is an iterable object that contains the associated probabilities.\n\nThis is optimized for value iteration with a fast implementation of weighted_iterator. Both pdf and rand are order n.\n\n\n\n\n\n"
},

{
    "location": "distributions.html#Sparse-Categorical-(SparseCat)-1",
    "page": "Distributions",
    "title": "Sparse Categorical (SparseCat)",
    "category": "section",
    "text": "SparseCat is a sparse categorical distribution which is specified by simply providing a list of possible values (states or observations) and the probabilities corresponding to those particular objects.Example: SparseCat([1,2,3], [0.1,0.2,0.7]) is a categorical distribution that assignes probability 0.1 to 1, 0.2 to 2, 0.7 to 3, and 0 to all other values.SparseCat"
},

{
    "location": "distributions.html#POMDPModelTools.BoolDistribution",
    "page": "Distributions",
    "title": "POMDPModelTools.BoolDistribution",
    "category": "type",
    "text": "BoolDistribution(p_true)\n\nCreate a distribution over Boolean values (true or false).\n\np_true is the probability of the true outcome; the probability of false is 1-p_true.\n\n\n\n\n\n"
},

{
    "location": "distributions.html#Bool-Distribution-1",
    "page": "Distributions",
    "title": "Bool Distribution",
    "category": "section",
    "text": "BoolDistribution"
},

{
    "location": "distributions.html#POMDPModelTools.Deterministic",
    "page": "Distributions",
    "title": "POMDPModelTools.Deterministic",
    "category": "type",
    "text": "Detrministic(value)\n\nCreate a deterministic distribution over only one value.\n\nThis is intended to be used when a distribution is required, but the outcome is deterministic. It is equivalent to a Kronecker Delta distribution.\n\n\n\n\n\n"
},

{
    "location": "distributions.html#Deterministic-1",
    "page": "Distributions",
    "title": "Deterministic",
    "category": "section",
    "text": "Deterministic"
},

{
    "location": "distributions.html#POMDPModelTools.Uniform",
    "page": "Distributions",
    "title": "POMDPModelTools.Uniform",
    "category": "type",
    "text": "Uniform(collection)\n\nCreate a uniform categorical distribution over a collection of objects.\n\nThe objects in the collection must be unique (this is tested on construction), and will be stored in a Set. To avoid this overhead, use UnsafeUniform.\n\n\n\n\n\n"
},

{
    "location": "distributions.html#POMDPModelTools.UnsafeUniform",
    "page": "Distributions",
    "title": "POMDPModelTools.UnsafeUniform",
    "category": "type",
    "text": "UnsafeUniform(collection)\n\nCreate a uniform categorical distribution over a collection of objects.\n\nNo checks are performed to ensure uniqueness or check whether an object is actually in the set when evaluating the pdf.\n\n\n\n\n\n"
},

{
    "location": "distributions.html#Uniform-1",
    "page": "Distributions",
    "title": "Uniform",
    "category": "section",
    "text": "Uniform\nUnsafeUniform"
},

{
    "location": "distributions.html#POMDPModelTools.showdistribution",
    "page": "Distributions",
    "title": "POMDPModelTools.showdistribution",
    "category": "function",
    "text": "showdistribution([io], [mime], d)\n\nShow a UnicodePlots.barplot representation of a distribution.\n\nKeyword Arguments\n\ntitle::String=string(typeof(d))*\" distribution\": title for the barplot. \n\n\n\n\n\n"
},

{
    "location": "distributions.html#Pretty-Printing-1",
    "page": "Distributions",
    "title": "Pretty Printing",
    "category": "section",
    "text": "showdistribution"
},

{
    "location": "index.html#",
    "page": "About",
    "title": "About",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#About-1",
    "page": "About",
    "title": "About",
    "category": "section",
    "text": "POMDPModelTools is a collection of interface extensions and tools to make writing models and solvers for POMDPs.jl easier."
},

{
    "location": "interface_extensions.html#",
    "page": "Interface Extensions",
    "title": "Interface Extensions",
    "category": "page",
    "text": ""
},

{
    "location": "interface_extensions.html#Interface-Extensions-1",
    "page": "Interface Extensions",
    "title": "Interface Extensions",
    "category": "section",
    "text": "POMDPModelTools contains several interface extensions that provide shortcuts and standardized ways of dealing with extra data.Programmers should use these functions whenever possible in case optimized implementations are available, but all of the functions have default implementations based on the core POMDPs.jl interface. Thus, if the core interface is implemented, all of these functions will also be available."
},

{
    "location": "interface_extensions.html#POMDPModelTools.weighted_iterator",
    "page": "Interface Extensions",
    "title": "POMDPModelTools.weighted_iterator",
    "category": "function",
    "text": "weighted_iterator(d)\n\nReturn an iterator through pairs of the values and probabilities in distribution d.\n\nThis is designed to speed up value iteration. Distributions are encouraged to provide a custom optimized implementation if possible.\n\nExample\n\njulia> d = BoolDistribution(0.7)\nBoolDistribution(0.7)\n\njulia> collect(weighted_iterator(d))\n2-element Array{Pair{Bool,Float64},1}:\n  true => 0.7\n false => 0.3\n\n\n\n\n\n"
},

{
    "location": "interface_extensions.html#Weighted-Iteration-1",
    "page": "Interface Extensions",
    "title": "Weighted Iteration",
    "category": "section",
    "text": "Many solution techniques, for example value iteration, require iteration through the support of a distribution and evaluating the probability mass for each value. In some cases, looking up the probability mass is expensive, so it is more efficient to iterate through value => probability pairs. weighted_iterator provides a standard interface for this.weighted_iterator"
},

{
    "location": "interface_extensions.html#POMDPModelTools.obs_weight",
    "page": "Interface Extensions",
    "title": "POMDPModelTools.obs_weight",
    "category": "function",
    "text": "obs_weight(pomdp, sp, o)\nobs_weight(pomdp, a, sp, o)\nobs_weight(pomdp, s, a, sp, o)\n\nReturn a weight proportional to the likelihood of receiving observation o from state sp (and a and s if they are present).\n\nThis is a useful shortcut for particle filtering so that the observation distribution does not have to be represented.\n\n\n\n\n\n"
},

{
    "location": "interface_extensions.html#Observation-Weight-1",
    "page": "Interface Extensions",
    "title": "Observation Weight",
    "category": "section",
    "text": "Sometimes, e.g. in particle filtering, the relative likelihood of an observation is required in addition to a generative model, and it is often tedious to implement a custom observation distribution type. For this case, the shortcut function obs_weight is provided.obs_weight"
},

{
    "location": "interface_extensions.html#POMDPModelTools.ordered_actions",
    "page": "Interface Extensions",
    "title": "POMDPModelTools.ordered_actions",
    "category": "function",
    "text": "ordered_actions(mdp)\n\nReturn an AbstractVector of actions ordered according to actionindex(mdp, a).\n\nordered_actions(mdp) will always return an AbstractVector{A} v containing all of the actions in actions(mdp) in the order such that actionindex(mdp, v[i]) == i. You may wish to override this for your problem for efficiency.\n\n\n\n\n\n"
},

{
    "location": "interface_extensions.html#POMDPModelTools.ordered_states",
    "page": "Interface Extensions",
    "title": "POMDPModelTools.ordered_states",
    "category": "function",
    "text": "ordered_states(mdp)\n\nReturn an AbstractVector of states ordered according to stateindex(mdp, a).\n\nordered_states(mdp) will always return a AbstractVector{A} v containing all of the states in states(mdp) in the order such that stateindex(mdp, v[i]) == i. You may wish to override this for your problem for efficiency.\n\n\n\n\n\n"
},

{
    "location": "interface_extensions.html#POMDPModelTools.ordered_observations",
    "page": "Interface Extensions",
    "title": "POMDPModelTools.ordered_observations",
    "category": "function",
    "text": "ordered_observations(pomdp)\n\nReturn an AbstractVector of observations ordered according to obsindex(pomdp, a).\n\nordered_observations(mdp) will always return a AbstractVector{A} v containing all of the observations in observations(pomdp) in the order such that obsindex(pomdp, v[i]) == i. You may wish to override this for your problem for efficiency.\n\n\n\n\n\n"
},

{
    "location": "interface_extensions.html#Ordered-Spaces-1",
    "page": "Interface Extensions",
    "title": "Ordered Spaces",
    "category": "section",
    "text": "It is often useful to have a list of states, actions, or observations ordered consistently with the respective _index function from POMDPs.jl. Since the POMDPs.jl interface does not demand that spaces be ordered consistently with _index, the states, actions, and observations functions are not sufficient. Thus POMDPModelTools provides ordered_actions, ordered_states, and ordered_observations to provide this capability.ordered_actions\nordered_states\nordered_observations"
},

{
    "location": "interface_extensions.html#POMDPModelTools.generate_sri",
    "page": "Interface Extensions",
    "title": "POMDPModelTools.generate_sri",
    "category": "function",
    "text": "Return a tuple containing the next state and reward and information (usually a NamedTuple, Dict or nothing) from that step.\n\nBy default, returns nothing as info.\n\n\n\n\n\n"
},

{
    "location": "interface_extensions.html#POMDPModelTools.generate_sori",
    "page": "Interface Extensions",
    "title": "POMDPModelTools.generate_sori",
    "category": "function",
    "text": "Return a tuple containing the next state, observation, and reward and information (usually a NamedTuple, Dict or nothing) from that step.\n\nBy default, returns nothing as info. \n\n\n\n\n\n"
},

{
    "location": "interface_extensions.html#POMDPModelTools.action_info",
    "page": "Interface Extensions",
    "title": "POMDPModelTools.action_info",
    "category": "function",
    "text": "a, ai = action_info(policy, x)\n\nReturn a tuple containing the action determined by policy \'p\' at state or belief \'x\' and information (usually a NamedTuple, Dict or nothing) from the calculation of that action.\n\nBy default, returns nothing as info.\n\n\n\n\n\n"
},

{
    "location": "interface_extensions.html#POMDPModelTools.solve_info",
    "page": "Interface Extensions",
    "title": "POMDPModelTools.solve_info",
    "category": "function",
    "text": "policy, si = solve_info(solver, problem)\n\nReturn a tuple containing the policy determined by a solver and information (usually a NamedTuple, Dict or nothing) from the calculation of that policy.\n\nBy default, returns nothing as info.\n\n\n\n\n\n"
},

{
    "location": "interface_extensions.html#POMDPModelTools.update_info",
    "page": "Interface Extensions",
    "title": "POMDPModelTools.update_info",
    "category": "function",
    "text": "bp, i = update_info(updater, b, a, o)\n\nReturn a tuple containing the new belief and information (usually a NamedTuple, Dict or nothing) from the belief update.\n\nBy default, returns nothing as info.\n\n\n\n\n\n"
},

{
    "location": "interface_extensions.html#Info-Interface-1",
    "page": "Interface Extensions",
    "title": "Info Interface",
    "category": "section",
    "text": "It is often the case that useful information besides the belief, state, action, etc is generated by a function in POMDPs.jl. This information can be useful for debugging or understanding the behavior of a solver, updater, or problem. The info interface provides a standard way for problems, policies, solvers or updaters to output this information. The recording simulators from POMDPSimulators.jl automatically record this information.generate_sri\ngenerate_sori\naction_info\nsolve_info\nupdate_info"
},

{
    "location": "model_transformations.html#",
    "page": "Model Transformations",
    "title": "Model Transformations",
    "category": "page",
    "text": ""
},

{
    "location": "model_transformations.html#Model-Transformations-1",
    "page": "Model Transformations",
    "title": "Model Transformations",
    "category": "section",
    "text": "POMDPModelTools contains several tools for transforming problems into other classes so that they can be used by different solvers."
},

{
    "location": "model_transformations.html#POMDPModelTools.SparseTabularMDP",
    "page": "Model Transformations",
    "title": "POMDPModelTools.SparseTabularMDP",
    "category": "type",
    "text": "SparseTabularMDP\n\nAn MDP object where states and actions are integers and the transition is represented by a list of sparse matrices. This data structure can be useful to exploit in vectorized algorithm (e.g. see SparseValueIterationSolver). The recommended way to access the transition and reward matrices is through the provided accessor functions: transition_matrix and reward_vector.\n\nFields\n\nT::Vector{SparseMatrixCSC{Float64, Int64}} The transition model is represented as a vector of sparse matrices (one for each action). T[a][s, sp] the probability of transition from s to sp taking action a.\nR::Array{Float64, 2} The reward is represented as a matrix where the rows are states and the columns actions: R[s, a] is the reward of taking action a in sate s.\nterminal_states::Set{Int64} Stores the terminal states\ndiscount::Float64 The discount factor\n\nConstructors\n\nSparseTabularMDP(mdp::MDP) : One can provide the matrices to the default constructor or one can construct a SparseTabularMDP from any discrete state MDP defined using the explicit interface. \n\nNote that constructing the transition and reward matrices requires to iterate over all the states and can take a while. To learn more information about how to define an MDP with the explicit interface please visit https://juliapomdp.github.io/POMDPs.jl/latest/explicit/ .\n\nSparseTabularMDP(smdp::SparseTabularMDP; transition, reward, discount) : This constructor returns a new sparse MDP that is a copy of the original smdp except for the field specified by the keyword arguments.\n\n\n\n\n\n"
},

{
    "location": "model_transformations.html#POMDPModelTools.SparseTabularPOMDP",
    "page": "Model Transformations",
    "title": "POMDPModelTools.SparseTabularPOMDP",
    "category": "type",
    "text": "SparseTabularPOMDP\n\nA POMDP object where states and actions are integers and the transition and observation distributions are represented by lists of sparse matrices. This data structure can be useful to exploit in vectorized algorithms to gain performance (e.g. see SparseValueIterationSolver). The recommended way to access the transition, reward, and observation matrices is through the provided accessor functions: transition_matrix, reward_vector, observation_matrix.\n\nFields\n\nT::Vector{SparseMatrixCSC{Float64, Int64}} The transition model is represented as a vector of sparse matrices (one for each action). T[a][s, sp] the probability of transition from s to sp taking action a.\nR::Array{Float64, 2} The reward is represented as a matrix where the rows are states and the columns actions: R[s, a] is the reward of taking action a in sate s.\nO::Vector{SparseMatrixCSC{Float64, Int64}} The observation model is represented as a vector of sparse matrices (one for each action). O[a][sp, o] is the probability of observing o from state sp after having taken action a.\nterminal_states::Set{Int64} Stores the terminal states\ndiscount::Float64 The discount factor\n\nConstructors\n\nSparseTabularPOMDP(pomdp::POMDP) : One can provide the matrices to the default constructor or one can construct a SparseTabularPOMDP from any discrete state MDP defined using the explicit interface. \n\nNote that constructing the transition and reward matrices requires to iterate over all the states and can take a while. To learn more information about how to define an MDP with the explicit interface please visit https://juliapomdp.github.io/POMDPs.jl/latest/explicit/ .\n\nSparseTabularPOMDP(spomdp::SparseTabularMDP; transition, reward, observation, discount) : This constructor returns a new sparse POMDP that is a copy of the original smdp except for the field specified by the keyword arguments.\n\n\n\n\n\n"
},

{
    "location": "model_transformations.html#POMDPModelTools.transition_matrix",
    "page": "Model Transformations",
    "title": "POMDPModelTools.transition_matrix",
    "category": "function",
    "text": "transition_matrix(p::SparseTabularProblem, a)\n\nAccessor function for the transition model of a sparse tabular problem. It returns a sparse matrix containing the transition probabilities when taking action a: T[s, sp] = Pr(sp | s, a).\n\n\n\n\n\n"
},

{
    "location": "model_transformations.html#POMDPModelTools.reward_vector",
    "page": "Model Transformations",
    "title": "POMDPModelTools.reward_vector",
    "category": "function",
    "text": "reward_vector(p::SparseTabularProblem, a)\n\nAccessor function for the reward function of a sparse tabular problem. It returns a vector containing the reward for all the states when taking action a: R(s, a).  The length of the return vector is equal to the number of states.\n\n\n\n\n\n"
},

{
    "location": "model_transformations.html#POMDPModelTools.observation_matrix",
    "page": "Model Transformations",
    "title": "POMDPModelTools.observation_matrix",
    "category": "function",
    "text": "observation_matrix(p::SparseTabularPOMDP, a::Int64)\n\nAccessor function for the observation model of a sparse tabular POMDP. It returns a sparse matrix containing the observation probabilities when having taken action a: O[sp, o] = Pr(o | sp, a).\n\n\n\n\n\n"
},

{
    "location": "model_transformations.html#POMDPModelTools.transition_matrices",
    "page": "Model Transformations",
    "title": "POMDPModelTools.transition_matrices",
    "category": "function",
    "text": "transition_matrices(p::SparseTabularProblem)\n\nAccessor function for the transition model of a sparse tabular problem. It returns a list of sparse matrices for each action of the problem.\n\n\n\n\n\n"
},

{
    "location": "model_transformations.html#POMDPModelTools.reward_matrix",
    "page": "Model Transformations",
    "title": "POMDPModelTools.reward_matrix",
    "category": "function",
    "text": "reward_matrix(p::SparseTabularProblem)\n\nAccessor function for the reward matrix R[s, a] of a sparse tabular problem.\n\n\n\n\n\n"
},

{
    "location": "model_transformations.html#POMDPModelTools.observation_matrices",
    "page": "Model Transformations",
    "title": "POMDPModelTools.observation_matrices",
    "category": "function",
    "text": "observation_matrices(p::SparseTabularPOMDP)\n\nAccessor function for the observation model of a sparse tabular POMDP. It returns a list of sparse matrices for each action of the problem.\n\n\n\n\n\n"
},

{
    "location": "model_transformations.html#Sparse-Tabular-MDPs-and-POMDPs-1",
    "page": "Model Transformations",
    "title": "Sparse Tabular MDPs and POMDPs",
    "category": "section",
    "text": "The SparseTabularMDP and SparseTabularPOMDP represents discrete problems defined using the explicit interface. The transition and observation models are represented using sparse matrices. Solver writers can leverage these data structures to write efficient vectorized code. A problem writer can define its problem using the explicit interface and it can be automatically converted to a sparse tabular representation by calling the constructors SparseTabularMDP(::MDP) or SparseTabularPOMDP(::POMDP). See the following docs to know more about the matrix representation and how to access the fields of the SparseTabular objects:SparseTabularMDP\nSparseTabularPOMDP\ntransition_matrix\nreward_vector\nobservation_matrix\ntransition_matrices\nreward_matrix\nobservation_matrices"
},

{
    "location": "model_transformations.html#POMDPModelTools.FullyObservablePOMDP",
    "page": "Model Transformations",
    "title": "POMDPModelTools.FullyObservablePOMDP",
    "category": "type",
    "text": "FullyObservablePOMDP(mdp)\n\nTurn MDP mdp into a POMDP where the observations are the states of the MDP.\n\n\n\n\n\n"
},

{
    "location": "model_transformations.html#Fully-Observable-POMDP-1",
    "page": "Model Transformations",
    "title": "Fully Observable POMDP",
    "category": "section",
    "text": "FullyObservablePOMDP"
},

{
    "location": "model_transformations.html#POMDPModelTools.GenerativeBeliefMDP",
    "page": "Model Transformations",
    "title": "POMDPModelTools.GenerativeBeliefMDP",
    "category": "type",
    "text": "GenerativeBeliefMDP(pomdp, updater)\n\nCreate a generative model of the belief MDP corresponding to POMDP pomdp with belief updates performed by updater.\n\n\n\n\n\n"
},

{
    "location": "model_transformations.html#Generative-Belief-MDP-1",
    "page": "Model Transformations",
    "title": "Generative Belief MDP",
    "category": "section",
    "text": "Every POMDP is an MDP on the belief space GenerativeBeliefMDP creates a generative model for that MDP.warning: Warning\nThe reward generated by the GenerativeBeliefMDP is the reward for a single state sampled from the belief; it is not the   expected reward for that belief transition (though, in expectation, they are equivalent of course). Implementing the model with the expected reward requires a custom implementation because belief updaters do not typically deal with reward.GenerativeBeliefMDP"
},

{
    "location": "model_transformations.html#Example-1",
    "page": "Model Transformations",
    "title": "Example",
    "category": "section",
    "text": "DocTestSetup = quote\n    using Pkg\n    Pkg.add(\"POMDPModels\")\n    Pkg.add(\"BeliefUpdaters\")\n    # the thing below should be a jldoctest once POMDPSimulators gets registered\nendusing POMDPModels\nusing POMDPModelTools\nusing BeliefUpdaters\n\npomdp = BabyPOMDP()\nupdater = DiscreteUpdater(pomdp)\n\nbelief_mdp = GenerativeBeliefMDP(pomdp, updater)\n@show statetype(belief_mdp) # POMDPModels.BoolDistribution\n\nfor (a, r, sp) in stepthrough(belief_mdp, RandomPolicy(belief_mdp), \"a,r,sp\", max_steps=5)\n    @show a, r, sp\nendDocTestSetup = nothing"
},

{
    "location": "model_transformations.html#POMDPModelTools.UnderlyingMDP",
    "page": "Model Transformations",
    "title": "POMDPModelTools.UnderlyingMDP",
    "category": "type",
    "text": "UnderlyingMDP(m::POMDP)\n\nTransform POMDP m into an MDP where the states are fully observed.\n\nUnderlyingMDP(m::MDP)\n\nReturn m\n\n\n\n\n\n"
},

{
    "location": "model_transformations.html#Underlying-MDP-1",
    "page": "Model Transformations",
    "title": "Underlying MDP",
    "category": "section",
    "text": "UnderlyingMDP"
},

{
    "location": "policy_evaluation.html#",
    "page": "Policy Evaluation",
    "title": "Policy Evaluation",
    "category": "page",
    "text": ""
},

{
    "location": "policy_evaluation.html#POMDPModelTools.evaluate",
    "page": "Policy Evaluation",
    "title": "POMDPModelTools.evaluate",
    "category": "function",
    "text": "evaluate(m::MDP, p::Policy)\nevaluate(m::MDP, p::Policy; rewardfunction=POMDPs.reward)\n\nCalculate the value for a policy on an MDP using the approach in equation 4.2.2 of Kochenderfer, Decision Making Under Uncertainty, 2015.\n\nReturns a DiscreteValueFunction, which maps states to values.\n\nExample\n\nusing POMDPModelTools, POMDPPolicies, POMDPModels\nm = SimpleGridWorld()\nu = evaluate(m, FunctionPolicy(x->:left))\nu([1,1]) # value of always moving left starting at state [1,1]\n\n\n\n\n\n"
},

{
    "location": "policy_evaluation.html#Policy-Evaluation-1",
    "page": "Policy Evaluation",
    "title": "Policy Evaluation",
    "category": "section",
    "text": "The evaluate function provides a policy evaluation tool for MDPs:evaluate"
},

{
    "location": "utility_types.html#",
    "page": "Utility Types",
    "title": "Utility Types",
    "category": "page",
    "text": ""
},

{
    "location": "utility_types.html#Utility-Types-1",
    "page": "Utility Types",
    "title": "Utility Types",
    "category": "section",
    "text": ""
},

{
    "location": "utility_types.html#POMDPModelTools.TerminalState",
    "page": "Utility Types",
    "title": "POMDPModelTools.TerminalState",
    "category": "type",
    "text": "TerminalState\n\nA type with no fields whose singleton instance terminalstate is used to represent a terminal state with no additional information.\n\nThis type has the appropriate promotion logic implemented to function like Missing when added to arrays, etc.\n\nNote that terminal states NEED NOT be of type TerminalState. You can define any state to be terminal by implementing the appropriate isterminal method. Solvers and simulators SHOULD NOT check for this type, but should instead check using isterminal. \n\n\n\n\n\n"
},

{
    "location": "utility_types.html#POMDPModelTools.terminalstate",
    "page": "Utility Types",
    "title": "POMDPModelTools.terminalstate",
    "category": "constant",
    "text": "terminalstate\n\nThe singleton instance of type TerminalState representing a terminal state.\n\n\n\n\n\n"
},

{
    "location": "utility_types.html#Terminal-State-1",
    "page": "Utility Types",
    "title": "Terminal State",
    "category": "section",
    "text": "TerminalState and its singleton instance terminalstate are available to use for a terminal state in concert with another state type. It has the appropriate type promotion logic to make its use with other types friendly, similar to nothing and missing.note: Note\nNOTE: This is NOT a replacement for the standard POMDPs.jl isterminal function, though isterminal is implemented for the type. It is merely a convenient type to use for terminal states.warning: Warning\nWARNING: Early tests (August 2018) suggest that the Julia 1.0 compiler will not be able to efficiently implement union splitting in cases as  complex as POMDPs, so using a Union for the state type of a problem can currently have a large overhead.TerminalState\nterminalstate"
},

{
    "location": "visualization.html#",
    "page": "Visualization",
    "title": "Visualization",
    "category": "page",
    "text": ""
},

{
    "location": "visualization.html#POMDPModelTools.render",
    "page": "Visualization",
    "title": "POMDPModelTools.render",
    "category": "function",
    "text": "render(m::Union{MDP,POMDP}, step::NamedTuple)\n\nReturn a renderable representation of the step in problem m.\n\nThe renderable representation may be anything that has show(io, mime, x) methods. It could be a plot, svg, Compose.jl context, Cairo context, or image.\n\nArguments\n\nstep is a NamedTuple that contains the states, action, etc. corresponding to one transition in a simulation. It may have the following fields:\n\nt: the time step index\ns: the state at the beginning of the step\na: the action\nsp: the state at the end of the step (s\')\nr: the reward for the step\no: the observation\nb: the belief at the \nbp: the belief at the end of the step\ni: info from the model when the state transition was calculated\nai: info from the policy decision\nui: info from the belief update\n\nKeyword arguments are reserved for the problem implementer and can be used to control appearance, etc.\n\nImportant Notes\n\nstep may not contain all of the elements listed above, so render should check for them and render only what is available\no typically corresponds to sp, so it is often clearer for POMDPs to render sp rather than s.\n\n\n\n\n\n"
},

{
    "location": "visualization.html#Visualization-1",
    "page": "Visualization",
    "title": "Visualization",
    "category": "section",
    "text": "POMDPModelTools contains a basic visualization interface consisting of the render function.Problem writers should implement a method of this function so that their problem can be visualized in a variety of contexts including jupyter notebooks, web browsers, or saved as images or animations.renderSometimes it is important to have control over how the problem is rendered with different mimetypes. One way to handle this is to have render return a custom type, e.g.struct MyProblemVisualization\n    mdp::MyProblem\n    step::NamedTuple\nend\n\nPOMDPModelTools.render(mdp, step) = MyProblemVisualization(mdp, step)and then implement custom show methods, e.g.show(io::IO, mime::MIME\"text/html\", v::MyProblemVisualization)"
},

]}
