require 'test_helper'

class ManagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get manages_index_url
    assert_response :success
  end

  test "should get show" do
    get manages_show_url
    assert_response :success
  end

  test "should get edit" do
    get manages_edit_url
    assert_response :success
  end

  test "should get update" do
    get manages_update_url
    assert_response :success
  end

end
