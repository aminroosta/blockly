/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2018 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Node.js script to run all tests.
 */
if (require.main !== module) {
  throw __filename + ' must be called directly.';
}

var testFns = [
      require('./jsunit/run_jsunit_tests_in_browser')
    ];

var errored = false;
testFns.forEach((testFn) => {
  try {
    testFn();
  } catch (errorStr) {
    errored = true;
    console.error(errorStr + '\n\n');
  }
});

if (errored) {
  process.exit(1);
}