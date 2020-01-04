class h2o_models:
  def __init__(self, train_frame, valid_frame, include_columns, categorical_columns, response_variable, model_id):
    self.response_variable = response_variable
    self.include_columns= include_columns
    self.features = self.include_columns
    self.train, self.valid = train_frame, valid_frame
    self.model_id = model_id
  
  def gbm(self):
    self.hyper_params  = {'learn_rate': [0.1, 1],
                          'max_depth': [8],
                          'balance_classes': [True]}
    self.search_criteria = {'strategy':"RandomDiscrete"}
    self.gbm_grid1 = H2OGridSearch(model=H2OGradientBoostingEstimator,
                                   grid_id='gbm_model_'+self.model_id,
                                   hyper_params=self.hyper_params,
                                   search_criteria=self.search_criteria)
    print("model inputs :\n\t" + " | ".join(self.features))
    print("model response \n\t" + self.response_variable) 
    self.gbm_grid1.train(x = self.features,
                         y = self.response_variable,
                         training_frame=self.train,
                         validation_frame=self.valid,
                         ntrees = 1000,
                         stopping_rounds = 5,
                         stopping_tolerance = 1e-4,
                         distribution = 'gamma',
                         #categorical_encoding = 'one_hot_explicit',
                         stopping_metric = 'mse',
                         seed=1)

    return self.gbm_grid1
  
  def rf(self):
    self.hyper_params  = {'max_depth': [15],
                          'min_split_improvement': [1e-4]}
    self.search_criteria = {'strategy': "RandomDiscrete"}
    self.rf_grid1 = H2OGridSearch(model=H2ORandomForestEstimator,
                                  grid_id='rf_model_'+self.model_id,
                                  hyper_params=self.hyper_params, 
                                  search_criteria=self.search_criteria)
          print("model inputs :\n\t" + " | ".join(self.features))
          print("model response \n\t" + self.response_variable) 
    self.rf_grid1.train(x = self.features,
                        y = self.response_variable,
                        training_frame=self.train,
                        validation_frame=self.valid,
                        ntrees = 1000,
                        stopping_rounds = 5,
                        stopping_tolerance =1e-3,
                        distribution = 'tweedie',
                        #categorical_encoding = 'one_hot_explicit',
                        col_sample_rate_per_tree=0.6 ,
                        min_rows= 200,
                        stopping_metric = 'MSE',
                        #sample_rate\t= 0.6320000290870667,
                        seed=34847891)
    return self.rf_grid1